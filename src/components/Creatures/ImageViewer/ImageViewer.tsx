import { useEffect, useRef, useState } from "react";
import { creatures, type Creature } from "../creatures.data";
import { Viewer, CloseButton, Photo, Caption, PhotoArrow } from "./ImageViewer.styles";

type Props = { creature: Creature; onClose: () => void };

export default function ImageViewer({ creature, onClose }: Props) {
  const [index, setIndex] = useState(() => creatures.findIndex(item => item.id === creature.id));
  const current = creatures[index];
  const navigate = (direction: number) => setIndex(value => (value + direction + creatures.length) % creatures.length);
  const dialog = useRef<HTMLDialogElement>(null);
  const backdropPointer = useRef(false);

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <Viewer
      ref={dialog}
      aria-labelledby="creature-photo-title"
      onClose={onClose}
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          event.stopPropagation();
          navigate(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onPointerDown={(event) => {
        backdropPointer.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (backdropPointer.current && event.target === event.currentTarget)
          dialog.current?.close();
        backdropPointer.current = false;
      }}
    >
      <CloseButton
        type="button"
        onClick={() => dialog.current?.close()}
        aria-label="Close photograph"
        autoFocus
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m5 5 14 14M19 5 5 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </CloseButton>
      <PhotoArrow type="button" $side="left" aria-label="Previous photograph" onClick={() => navigate(-1)}>
        <svg width="18" height="28" viewBox="0 0 20 30" fill="none" aria-hidden="true"><path d="m16 3-12 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </PhotoArrow>
      <Photo src={current.image} alt={current.alt} draggable={false} />
      <PhotoArrow type="button" $side="right" aria-label="Next photograph" onClick={() => navigate(1)}>
        <svg width="18" height="28" viewBox="0 0 20 30" fill="none" aria-hidden="true"><path d="m4 3 12 12-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </PhotoArrow>
      <Caption id="creature-photo-title" aria-live="polite" aria-atomic="true">{current.name}</Caption>
    </Viewer>
  );
}
