import bkash from '../../assets/payment/ULAB-bKash_Payment-System-1.jpg'

const Payment = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-3xl text-start font-semibold  mb-10"><span className="border-b-8  pb-2">Payment System</span></h2>
            <div className='max-w-3xl'>
                <img src={bkash} alt={Payment} className='w-full shadow-lg'/>
            </div>
        </div>
    );
};

export default Payment;