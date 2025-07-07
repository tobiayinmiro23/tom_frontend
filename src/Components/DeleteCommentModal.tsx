import { useState } from 'react'
import { Trash } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog"
import { deleteCommentI } from '../Types';


export default function DeleteCommentModal({ commentid, deleteComment }: deleteCommentI) {
    const [open, setopen] = useState(false);
    const handledeleteComment = () => {
        deleteComment(commentid)
        setopen(false)
    }

    return (
        <AlertDialog open={open} onOpenChange={setopen}>
            <AlertDialogTrigger asChild>
                <Trash className='cursor-pointer' size={22} strokeWidth={1.2} />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[white]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete comment?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        comment and remove your data from our database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <button type="submit" onClick={handledeleteComment} className="px-3 py-1 rounded-md text-[white]  bg-[#201e1e]  outline-none hover:bg-[#007991]" >Continue </button>

                    <button > </button>
                    {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
