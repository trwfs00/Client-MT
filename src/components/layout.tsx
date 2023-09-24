import MyNav from '@/components/navigation'
import MyFooter from '@/components/navigation'

export default function layout(children: any) {
    return (
        <>
            <MyNav/>
                {children}
            <MyFooter/>
        </>
    );
}
