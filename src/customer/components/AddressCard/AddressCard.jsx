import React from 'react'

const AddressCard = () => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Vinay Jagannavar</p>

        <p>
          205 Ashworth Pl, Syracuse, NY, 13210
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>(315)-603-7616</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard