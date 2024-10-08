'use client'

import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    return (
        <div className='modal'>
            <button
                onClick={() => {
                    router.back()
                }}
            >
                Close modal
            </button>
            <div className=' w-screen h-screen'>{children}</div>
        </div>
    )
}