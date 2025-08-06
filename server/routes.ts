import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve resume file specifically
  app.get("/youssef-darwish-resume.html", (req, res) => {
    try {
      const resumePath = path.resolve(import.meta.dirname, "..", "public", "youssef-darwish-resume.html");
      if (fs.existsSync(resumePath)) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.sendFile(resumePath);
      } else {
        res.status(404).json({ error: "Resume file not found" });
      }
    } catch (error) {
      console.error("Resume serving error:", error);
      res.status(500).json({ error: "Failed to serve resume" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Here you could integrate with email service like Nodemailer
      // For now, we'll just store the message
      
      res.json({ 
        success: true, 
        message: "Message sent successfully!",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
