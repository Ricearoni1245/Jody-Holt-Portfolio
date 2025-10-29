import React from "react";


export function Section({ id, children }: React.PropsWithChildren<{ id: string }>) {
return (
<section id={id} className="scroll-mt-24">
{children}
</section>
);
}