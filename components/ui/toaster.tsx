"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useEffect } from "react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        classType = "info",
        ...props
      }) {
        let styleType: string = "";
        switch (classType) {
          case "info":
            styleType = "text-gray-900";
            break;
          case "success":
            styleType = "bg-green-600 text-white";
            break;
          case "error":
            styleType = "bg-red-600 text-white";
            break;
          default:
            styleType = "text-gray-900";
            break;
        }
        return (
          <Toast key={id} {...props} className={styleType}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
