import { ReactNode } from "react";



export const FullWidthMdContainer = ({ children }: { children: ReactNode }) => {

    return (
        <div className=" w-full bg-[#f4f6fe] min-h-96 rounded-sm mx-auto py-16">
            <ContainerMd>
                {children}
            </ContainerMd>
        </div>
    )
}



export const ContainerMd = ({ children, classes }: { children: ReactNode, classes?: string }) => {

    return (
        <div className={`w-[85%] max-w-[1920px] mx-auto ${classes}`}>
            {children}
        </div>
    )
}



