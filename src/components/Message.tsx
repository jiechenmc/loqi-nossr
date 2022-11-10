import type { Msg } from "../app";

export default function Message({ author, content, createdAt }: Msg) {
  const date = new Date(createdAt).toUTCString();
  return (
    <div class="relative w-full h-20 bg-blue-200 m-4 p-4">
      <p class="text-xl">{content}</p>
      <div class="absolute right-20">
        <small>{author}</small>
      </div>
      <div class="bottom-0">
        <small>{date}</small>
      </div>
    </div>
  );
}
