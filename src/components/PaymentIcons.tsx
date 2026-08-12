type IconProps = { className?: string };

export function VisaIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="Visa">
      <rect width="38" height="24" rx="4" fill="#1A1F71" />
      <text x="19" y="16.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontStyle="italic" fontWeight="700" fill="white">VISA</text>
    </svg>
  );
}

export function MastercardIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="Mastercard">
      <rect width="38" height="24" rx="4" fill="#16171B" />
      <circle cx="16" cy="12" r="7" fill="#EB001B" />
      <circle cx="24" cy="12" r="7" fill="#F79E1B" fillOpacity="0.92" />
    </svg>
  );
}

export function PayPalIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="PayPal">
      <rect width="38" height="24" rx="4" fill="#F5F7FA" />
      <text x="19" y="16.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="700" fill="#003087">Pay<tspan fill="#009CDE">Pal</tspan></text>
    </svg>
  );
}

export function StripeIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="Stripe">
      <rect width="38" height="24" rx="4" fill="#635BFF" />
      <text x="19" y="16.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="800" fontStyle="italic" fill="white">S</text>
    </svg>
  );
}

export function ApplePayIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="Apple Pay">
      <rect width="38" height="24" rx="4" fill="#000000" />
      <path d="M13.1 8.2c.35-.42.58-1 .52-1.58-.5.02-1.1.33-1.46.75-.32.36-.6.95-.53 1.51.55.05 1.11-.28 1.47-.68z" fill="white" />
      <path d="M13.62 9c-.8-.05-1.48.45-1.86.45-.38 0-.96-.43-1.58-.42-.81.01-1.56.47-1.98 1.2-.85 1.47-.22 3.64.6 4.83.4.58.88 1.23 1.51 1.21.6-.02.83-.39 1.56-.39.73 0 .93.39 1.57.38.65-.01 1.06-.59 1.46-1.17.46-.67.65-1.32.66-1.35-.01-.01-1.27-.49-1.28-1.94-.01-1.22.99-1.8 1.04-1.83-.57-.83-1.44-.93-1.7-.97z" fill="white" />
      <text x="24.5" y="16" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="600" fill="white">Pay</text>
    </svg>
  );
}

export function GooglePayIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="Google Pay">
      <rect width="38" height="24" rx="4" fill="#F5F7FA" />
      <text x="9" y="16.3" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="700" fill="#5F6368">G<tspan fill="#4285F4">o</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">g</tspan><tspan fill="#4285F4">l</tspan><tspan fill="#34A853">e</tspan></text>
      <text x="30" y="16.3" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="400" fill="#5F6368">Pay</text>
    </svg>
  );
}

export function EfectivoIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="Pago en efectivo">
      <rect width="38" height="24" rx="4" fill="#0B0C10" />
      <rect x="6" y="7" width="26" height="10" rx="2" stroke="#D4AF72" strokeWidth="1.4" />
      <circle cx="19" cy="12" r="3" stroke="#D4AF72" strokeWidth="1.4" />
      <circle cx="9" cy="12" r="0.9" fill="#D4AF72" />
      <circle cx="29" cy="12" r="0.9" fill="#D4AF72" />
    </svg>
  );
}

export function TransferIcon({ className }: IconProps) {
  return (
    <svg className={className} width="38" height="24" viewBox="0 0 38 24" fill="none" role="img" aria-label="Transferencia bancaria">
      <rect width="38" height="24" rx="4" fill="#0B0C10" />
      <path d="M19 6l6 3.5H13L19 6z" fill="#D4AF72" />
      <rect x="14" y="10.5" width="2" height="6" fill="#D4AF72" />
      <rect x="18" y="10.5" width="2" height="6" fill="#D4AF72" />
      <rect x="22" y="10.5" width="2" height="6" fill="#D4AF72" />
      <rect x="12.5" y="17.2" width="13" height="1.6" fill="#D4AF72" />
    </svg>
  );
}

export function LockIcon({ className, color = "#065F46" }: IconProps & { color?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" strokeLinecap="round" />
    </svg>
  );
}
