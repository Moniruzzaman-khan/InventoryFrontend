import {Fragment, useEffect, useRef} from 'react';
import {
    CreateReturnRequest,
    CustomerDropDownRequest,
    ProductDropDownRequest
} from "../../APIRequest/ReturnAPIRequest";
import {useSelector} from "react-redux";
import {BsCartCheck, BsTrash} from "react-icons/bs";
import {ErrorToast, IsEmpty, SuccessToast} from "../../helper/FormHelper";
import store from "../../redux/store/store";
import {OnChangeReturnInput, RemoveReturnItem, SetReturnItemList, ResetReturnForm} from "../../redux/state-slice/return-slice";


const ReturnCreateUpdate = () => {

    let productRef,qtyRef,unitPriceRef=useRef();
    const formRef=useRef(null);

    useEffect(()=>{
        (async () => {
            await CustomerDropDownRequest();
            await ProductDropDownRequest();
        })();
    },[])


    let CustomerDropDown=useSelector((state)=>(state.return.CustomerDropDown));
    let ProductDropDown=useSelector((state)=>(state.return.ProductDropDown));
    let ReturnItemList=useSelector((state)=>(state.return.ReturnItemList));
    let ReturnFormValue=useSelector((state)=>(state.return.ReturnFormValue));

    const OnAddCart = () => {
        let productValue=productRef.value;
        let productName=productRef.selectedOptions[0].text;
        let qtyValue=qtyRef.value;
        let unitPriceValue=unitPriceRef.value;

        if(IsEmpty(productValue)){
            ErrorToast("Select Product")
        }
        else if(IsEmpty(qtyValue)){
            ErrorToast("Qty Required")
        }
        else if(IsEmpty(unitPriceValue)){
            ErrorToast("Unit Price Required")
        }
        else {
            let item= {
                "ProductID":productValue,
                "ProductName":productName,
                "Qty":qtyValue,
                "UnitCost":unitPriceValue,
                "Total":(parseInt(qtyValue))*(parseInt(unitPriceValue))
            }
            store.dispatch(SetReturnItemList(item))
            SuccessToast("Product added to return list")
        }

    }


    const removeCart = (i) => {
        store.dispatch(RemoveReturnItem(i))
        SuccessToast("Item removed from return list")
    }


    const CreateNewReturn=async () => {
        let res= await CreateReturnRequest(ReturnFormValue, ReturnItemList);
        if(res) {
            store.dispatch(ResetReturnForm());
            if(formRef.current) {
                formRef.current.reset();
            }
            if(productRef) productRef.value="";
            if(qtyRef) qtyRef.value="";
            if(unitPriceRef) unitPriceRef.value="";
        }
    }




    return (
        <Fragment>
            <form ref={formRef} className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row">
                                    <h5 >Create Return</h5>
                                    <hr className="bg-light"/>
                                    <div className="col-12 p-1">
                                        <label className="form-label">Customer</label>
                                        <select onChange={(e)=>{store.dispatch(OnChangeReturnInput({Name:"CustomerID",Value:e.target.value}))}} className="form-select form-select-sm">
                                            <option value="">Select Customer</option>
                                            {
                                                CustomerDropDown.map((item,i)=>{
                                                    return( <option key={i.toLocaleString()} value={item._id}>{item.CustomerName}</option>)
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Vat/Tax</label>
                                        <input onChange={(e)=>{store.dispatch(OnChangeReturnInput({Name:"VatTax",Value:e.target.value}))}} className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Discount</label>
                                        <input onChange={(e)=>{store.dispatch(OnChangeReturnInput({Name:"Discount",Value:e.target.value}))}} className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Other Cost</label>
                                        <input  onChange={(e)=>{store.dispatch(OnChangeReturnInput({Name:"OtherCost",Value:e.target.value}))}} className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Shipping Cost</label>
                                        <input onChange={(e)=>{store.dispatch(OnChangeReturnInput({Name:"ShippingCost",Value:e.target.value}))}}  className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-12 p-1">
                                        <label className="form-label">Grand Total</label>
                                        <input onChange={(e)=>{store.dispatch(OnChangeReturnInput({Name:"GrandTotal",Value:e.target.value}))}}  className="form-control form-control-sm" type="number"/>
                                    </div>


                                    <div className="col-12 p-1">
                                        <label className="form-label">Note</label>
                                        <input  onChange={(e)=>{store.dispatch(OnChangeReturnInput({Name:"Note",Value:e.target.value}))}}  className="form-control form-control-sm" type="number"/>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <button type="button" onClick={CreateNewReturn} className="btn btn-sm my-3 btn-success">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 mb-3">
                        <div className="card  h-100">
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-6  p-1">
                                        <label className="form-label">Select Product</label>
                                        <select ref={(input)=>productRef=input} className="form-select form-select-sm">
                                            <option value="">Select Product</option>
                                            {
                                                ProductDropDown.map((item,i)=>{
                                                    return( <option key={i.toLocaleString()} value={item._id}>{item.Name}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-2 p-1">
                                        <label className="form-label">Qty</label>
                                        <input ref={(input)=>qtyRef=input}  className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-2 p-1">
                                        <label className="form-label">Unit Price</label>
                                        <input ref={(input)=>unitPriceRef=input} className="form-control form-control-sm" />
                                    </div>
                                    <div className="col-2 p-1">
                                        <label className="form-label">Add to cart</label>
                                        <button type="button" onClick={OnAddCart} className="btn w-100 btn-success btn-sm"><BsCartCheck/></button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive table-section">
                                            <table className="table-sm text-center table">
                                                <thead className="sticky-top bg-white">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Qty</th>
                                                    <th>Unit Price</th>
                                                    <th>Total</th>
                                                    <th>Remove</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    ReturnItemList.map((item,i)=>{
                                                        return(
                                                            // eslint-disable-next-line react/jsx-key
                                                            <tr>
                                                                <td>{item.ProductName}</td>
                                                                <td>{item.Qty}</td>
                                                                <td>{item.UnitCost}</td>
                                                                <td>{item.Total}</td>
                                                                <td><button type="button" onClick={removeCart.bind(this,i)} className="btn btn-outline-light text-danger p-2 mb-0 btn-sm ms-2"><BsTrash/></button></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default ReturnCreateUpdate;