import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex touch-manipulation items-center justify-center gap-2 whitespace-nowrap rounded-xl text-[0.9375rem] font-medium leading-none tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-primary/15 bg-primary text-primary-foreground shadow-soft [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5 hover:border-primary/20 hover:brightness-[1.02] hover:shadow-soft-hover active:translate-y-0 active:brightness-[0.99]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-muted hover:text-foreground",
        secondary:
          "border border-navy/12 bg-background text-foreground shadow-sm hover:-translate-y-0.5 hover:border-navy/20 hover:bg-muted/60 hover:shadow-soft",
        ghost: "border border-transparent text-foreground hover:bg-muted/80",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
        inverted:
          "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15",
      },
      size: {
        default: "min-h-12 px-6 py-3.5 sm:min-h-11 sm:py-3",
        sm: "min-h-10 rounded-lg px-4 text-sm",
        lg: "min-h-14 rounded-xl px-8 text-base",
        icon: "size-12 rounded-xl sm:size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type MarketingVariant = "primary" | "secondary" | "ghost" | "inverted";

const marketingVariantMap: Record<
  MarketingVariant,
  NonNullable<VariantProps<typeof buttonVariants>["variant"]>
> = {
  primary: "default",
  secondary: "secondary",
  ghost: "ghost",
  inverted: "inverted",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

type ButtonLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
  variant?: MarketingVariant;
  size?: VariantProps<typeof buttonVariants>["size"];
};

function ButtonLink({ className, variant = "primary", size, href, ...props }: ButtonLinkProps) {
  return (
    <Button variant={marketingVariantMap[variant]} size={size} className={className} asChild>
      <Link href={href} {...props} />
    </Button>
  );
}

export { Button, ButtonLink, buttonVariants };
