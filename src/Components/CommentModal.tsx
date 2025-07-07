import { useState } from 'react'
import { commentDialogueI } from "../Types"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { toast } from "sonner"

export default function CommentModal({ comments, setcomments, children, addcomment, AddComment, handleUpdateComment, commentid }: commentDialogueI) {


    const [open, setopen] = useState(false);
    const handleSearchInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (setcomments) setcomments(e.target.value)
    }

    const UpdateComment = () => {
        if (comments?.trim().length == 0) toast.error('comments cannot be empty')
        else {
            if (handleUpdateComment) handleUpdateComment(commentid)
            setopen(false)
        }

    }
    const handleAddComment = () => {
        if (comments?.trim().length == 0) toast.error('comments cannot be empty')
        else {
            if (AddComment) AddComment()
            setopen(false)
        }
    }
    return (

        <div className=''>
            <Dialog open={open} onOpenChange={setopen}>
                <form className="bg-[white] w-[80%]">
                    <DialogTrigger asChild>
                        {children}
                    </DialogTrigger>
                    <DialogContent className="border-none bg-[white]">
                        <DialogHeader >
                            <DialogTitle>{addcomment ? 'Add Comment' : 'Update Comment'}</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <textarea value={comments} autoFocus={false} onChange={(e) => handleSearchInput(e)} className="w-[100%] m-[auto] h-[10rem] bg-[light-grey] p-[0.6rem] border-[1px] border-[grey] outline-none rounded-[0.4rem]"></textarea>
                            </div>
                        </div>
                        <DialogFooter className=''>
                            <DialogClose asChild>
                                <button className='border bg-background shadow-xs hover:bg-accent  dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer px-4 py-2 rounded-md'>Cancel</button>
                            </DialogClose>
                            <button type="submit" className="px-4 py-2 rounded-md text-[white]  bg-[black]  outline-none hover:bg-[#201e1e]" onClick={addcomment ? handleAddComment : UpdateComment}>{addcomment ? 'Add comments' : 'Update comments'} </button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    )
}
