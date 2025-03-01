import { forwardRef } from "react";

const buttonVariants = {
    variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/70",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-yellow-500/50 hover:border-yellow-500",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[0.375rem] px-3",
        lg: "h-11 rounded-[0.375rem] px-8",
        icon: "h-10 w-10",
    },
};

const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const classNames = [buttonVariants.variant[variant], buttonVariants.size[size], className].filter(Boolean).join(" ");
    const Component = asChild ? "span" : "button";
    return <Component ref={ref} className={classNames} {...props} />;
});

Button.displayName = "Button";

export { Button };

