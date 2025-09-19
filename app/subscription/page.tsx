import {PricingTable} from "@clerk/nextjs";

const Subscription = () => {
    return (
        <div className="mx-12 mt-6">
            <h1>Subscription Plan</h1>
            <div className="mt-4">
                <PricingTable />
            </div>
        </div>
    )
}

export default Subscription