"use client";

import { useEffect, useId, useState } from "react";
import QRCode from "qrcode";
import { Button } from "@/components/Button";

type SupportCardProps = { asset: string; network: string; address: string };

export function SupportCard({ asset, network, address }: SupportCardProps) {
  const [copied, setCopied] = useState(false);
  const [qrSvg, setQrSvg] = useState("");
  const statusId = useId();

  useEffect(() => {
    let active = true;
    QRCode.toString(address, { type: "svg", errorCorrectionLevel: "M", margin: 2, color: { dark: "#183c2b", light: "#ffffff" } })
      .then((svg) => { if (active) setQrSvg(svg); });
    return () => { active = false; };
  }, [address]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="flex min-w-0 flex-col border border-slate-200 bg-white p-6 shadow-subtle sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Asset</p><h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{asset}</h3></div>
        <div className="max-w-[60%] border-l-2 border-aica-600 pl-4 text-right"><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Network</p><p className="mt-2 text-sm font-semibold leading-5 text-aica-800">{network}</p></div>
      </div>
      <div className="mt-7 border-t border-slate-200 pt-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Receiving address</p><p className="mt-3 break-all font-mono text-sm leading-6 text-slate-800">{address}</p></div>
      <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="h-36 w-36 shrink-0 border border-slate-200 bg-white p-2" aria-label={`${asset} receiving address QR code for the ${network} network`} role="img">
          {qrSvg ? <div className="h-full w-full [&_svg]:h-full [&_svg]:w-full" aria-hidden="true" dangerouslySetInnerHTML={{ __html: qrSvg }} /> : <div className="flex h-full items-center justify-center text-xs text-slate-500" aria-hidden="true">Preparing QR code</div>}
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end"><Button aria-describedby={statusId} onClick={copyAddress} type="button" variant="secondary">{copied ? "Address copied" : "Copy address"}</Button><p id={statusId} aria-live="polite" className="min-h-5 text-sm font-medium text-aica-800">{copied ? "Copied to clipboard." : ""}</p></div>
      </div>
    </article>
  );
}
