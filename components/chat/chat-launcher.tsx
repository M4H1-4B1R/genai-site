import Image from "next/image";

type ChatLauncherProps = {
  open: boolean;
  panelId: string;
  onClick: () => void;
};

export function ChatLauncher({ open, panelId, onClick }: ChatLauncherProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close chat assistant" : "Open chat assistant"}
      aria-expanded={open}
      aria-controls={panelId}
      className="flex size-[77px] items-center justify-center rounded-full border border-[#ff9800] bg-[#080b0d] drop-shadow-[-4px_0px_2px_rgba(255,152,0,0.25)] transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 max-[640px]:size-[62px]"
    >
      <Image
        src="/figma/chat/logo-launcher.svg"
        alt=""
        width={40}
        height={20}
        unoptimized
        aria-hidden="true"
      />
    </button>
  );
}
