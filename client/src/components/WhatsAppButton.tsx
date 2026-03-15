/**
 * WhatsApp Button Component - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - Sticky floating button in bottom right
 * - Bright green color for WhatsApp branding
 * - Smooth animations
 */

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/66XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-green-500 text-white font-inter font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.195c-1.516.762-2.766 1.793-3.604 3.071-1.706 2.68-1.704 6.14.003 8.815 1.706 2.676 4.545 4.327 7.536 4.327h.004c3.01 0 5.849-1.652 7.554-4.327 1.706-2.675 1.708-6.135.003-8.815-1.706-2.678-4.545-4.327-7.536-4.327zm0-2.382c4.487 0 8.129 3.633 8.129 8.129s-3.642 8.129-8.129 8.129c-4.487 0-8.129-3.633-8.129-8.129s3.642-8.129 8.129-8.129z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
