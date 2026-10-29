/**
 * Overlay tag pill for work/evidence card images — same pattern as the
 * tag pill in work-grid.tsx (top-right of the image, ink backdrop, amber
 * mono label). Anchored to the nearest `relative` parent, which should be
 * a wrapper around the card's <Image>.
 */
export function WorkTag({ tag }: { tag: string }) {
	return (
		<div className="absolute right-3 top-3 z-10 rounded-[2px] border border-[rgba(255,192,129,0.3)] bg-[rgba(8,11,13,0.85)] px-2 py-[3px] backdrop-blur-sm">
			<span className="font-mono text-[10px] uppercase tracking-[0.5px] text-[#ffa600] max-[640px]:text-[9px]">
				{tag}
			</span>
		</div>
	);
}
