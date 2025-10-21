import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Share2, Download, Instagram } from "lucide-react";
import { format } from "date-fns";
import Badge3DModel from "./Badge3DModel.jsx";

export default function ShareModal({ badge, isOpen, onClose }) {
  const canvasRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!badge) return null;

  const handleDownload = () => {
    setIsGenerating(true);
    // Simulate download
    setTimeout(() => {
      setIsGenerating(false);
      alert("3D model screenshot feature coming soon!");
    }, 500);
  };

  const handleShareToInstagram = () => {
    const text = `I earned the "${badge.name}" badge for sorting ${
      badge.items_sorted || "waste"
    } items! 🌱♻️`;

    if (navigator.share) {
      navigator
        .share({
          title: badge.name,
          text: text,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert("Caption copied to clipboard!");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Badge to Instagram
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* 3D Preview */}
          <div className="relative aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl overflow-hidden">
            {badge.model_url ? (
              <Badge3DModel
                modelUrl={badge.model_url}
                color={badge.color || "#10b981"}
                autoRotate={true}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {badge.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{badge.description}</p>
                </div>
              </div>
            )}
          </div>

          <canvas ref={canvasRef} style={{ display: "none" }} />

          {/* Share buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleShareToInstagram}
              disabled={isGenerating}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Share to Instagram
            </Button>
            <Button
              onClick={handleDownload}
              disabled={isGenerating}
              variant="outline"
              className="flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
