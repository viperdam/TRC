import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
      >
        <MessageCircle />
        <span>WhatsApp</span>
      </a>
      <div className="p-2 bg-white rounded-lg">
        <QRCodeSVG value={whatsappUrl} size={128} />
      </div>
    </div>
  );
};