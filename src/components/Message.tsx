interface MessageProps {
  text: string;
}

export default function Message({ text }: MessageProps) {
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{text}</p>
    </div>
  );
}
