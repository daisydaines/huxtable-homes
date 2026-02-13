"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, i) => (
          <AnimateOnScroll key={i} delay={i * 0.1}>
            <button
              onClick={() => setSelectedImage(image)}
              className="relative aspect-[3/2] w-full overflow-hidden rounded-lg cursor-pointer group"
            >
              <Image
                src={image}
                alt={`${projectName} - Image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          </AnimateOnScroll>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
          <DialogTitle className="sr-only">
            {projectName} gallery image
          </DialogTitle>
          {selectedImage && (
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedImage}
                alt={projectName}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
