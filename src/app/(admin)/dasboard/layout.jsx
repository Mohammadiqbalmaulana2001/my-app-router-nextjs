
export default function DasboardLayout({ children , product}) {
    return (
        <div className="p-5">
            <div>
                {children}
                {product}
            </div>
        </div>
    )
}