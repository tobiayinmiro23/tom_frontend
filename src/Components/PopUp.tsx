"use client"

import { toast } from "sonner"

// import { Button } from "@/components/ui/button"

export default function PopUp() {
    const showSonner = () => {
        console.log('sonner')
        if (true) {
            toast.success("Event has been created")
        }
    }
    return (
        <button onClick={showSonner}>

            Show Toast
        </button>
    )
}
