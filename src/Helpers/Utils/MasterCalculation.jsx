  
  export function masterCalculation({ regiPrice, accPrice, addOn }) {
    const subtotal = Number.parseFloat((regiPrice + accPrice + addOn).toFixed(2))
    const processingFee = Number.parseFloat((subtotal * 0.05).toFixed(2))
    const grandTotal = Number.parseFloat((subtotal + processingFee).toFixed(2))
  
    return {
      subtotal,
      processingFee,
      grandTotal,
    }
  }
  
  