import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { editProduct } from "../../../../redux/actions/productActions"
import './index.css'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup.string()
        .required("Este campo es requerido")
        .max(50, "Máximo 50 carácteres")
        .min(5, "Mínimo 5 carácteres"),
    description: Yup.string()
        .required("Este campo es requerido")
        .max(480, "Máximo 480 carácteres")
        .min(2, "Completar campo"),
    category: Yup.string()
        .required("Este campo es requerido")
        .max(50, "Máximo 50 carácteres")
        .min(4, "Mínimo 4 carácteres"),
    color: Yup.string()
        .required("Este campo es requerido")
        .max(50, "Máximo 50 carácteres")
        .min(4, "Mínimo 4 carácteres"),
    image: Yup.string()
        .required("Este campo es requerido")
        .matches(RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/), "Ingresar formato URL"),
    price: Yup.string()
        .required("Este campo es requerido")
        .max(8, "Máximo 8 carácteres")
        .min(1, "Mínimo 1 carácteres"),
    discount: Yup.string()
        .required("Este campo es requerido"),
    warranty: Yup.string()
        .required("Este campo es requerido")
        .max(140, "Máximo 140 carácteres")
        .min(2, "Mínimo 2 carácteres"),
    brand: Yup.string()
        .required("Este campo es requerido")
        .max(30, "Máximo 30 carácteres")
        .min(2, "Mínimo 2 carácteres"),
    suitable_for: Yup.string()
        .required("Este campo es requerido")
        .max(50, "Máximo 50 carácteres")
        .min(2, "Mínimo 2 carácteres"),
    composition: Yup.string()
        .required("Este campo es requerido")
        .max(140, "Máximo 140 carácteres")
        .min(2, "Mínimo 2 carácteres"),
    origin: Yup.string()
        .required("Este campo es requerido")
        .max(50, "Máximo 50 carácteres")
        .min(2, "Mínimo 2 carácteres"),
    important_data: Yup.string()
        .required("Este campo es requerido")
        .max(140, "Máximo 140 carácteres")
        .min(2, "Mínimo 2 carácteres"),
    extras: Yup.string()
        .required("Este campo es requerido")
        .max(140, "Máximo 140 carácteres")
        .min(2, "Mínimo 2 carácteres"),
    gender: Yup.string(),
});
    
const DrawerEdit = ({activeDrawer, product}) => {
    const preloadedValues = {
        description: product?.description,
        color: product?.color,
        gender: product?.gender,
        price: product?.price,
        discount: product?.discount === null ? 0 : product?.discount,
        warranty: product?.warranty,
        brand: product?.brand,
        suitable_for: product?.suitable_for,
        composition: product?.composition,
        origin: product?.origin,
        important_data: product?.important_data,
        image: product?.image,
        category: product?.CategoryName,  
        extras: product?.extras
    }

const formOptions = { resolver: yupResolver(formSchema), defaultValues: preloadedValues };

    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm(formOptions);
    const nav = useNavigate()
    // const addSizesState = {"XS":25,"35":35,"44":58}
    const [addSizes, setAddSizes] = useState([["XS",25],["35",35],["44",58]])
    const dataSize = addSizes?.map((e) => e[0])
    const stock = addSizes?.map((e) => e[1]).reduce((a,b) => a + b )
    const [size, setSize] = useState(null)
    const [quantity, setQuantity] = useState("")    
    const sizesState = ["Size","XS","S","M","L","XL","XXL","35","36","37","38","39","40","41","42","43","44","45","46"]
    const [sizeShoes, setSizeShoes] = useState(sizesState); 
    const [disabled, setDisabled] = useState(true)

    for(let i = 0; i < addSizes.length ; i++) {
        for(let j = 0; j < sizesState.length; j++) {
        if(addSizes[i][0] === sizesState[j]){
            sizesState.splice(j,1)
            }
        }
    }

    const onSubmit = (data) => {
        const sendData = {...data ,
            //cambiar valor por array nuevo
            "stock_by_size" : {"XS":25,"35":35,"44":58},
            "size" : dataSize.toString(),
            "stock" : stock,
            "id": product?.id,
            "price": Number(data.price)
        }
        console.log('senData', sendData)
        dispatch(editProduct(sendData)); 
        nav("/admin");
        activeDrawer();
    };

    const handleDeleteSize = (e) => {
        e.preventDefault();
        const arrayDelete = [...addSizes]
        arrayDelete.splice(e.target.name, 1)
        setAddSizes(arrayDelete)
        const valor = [...sizeShoes, e.target.value]
        setSizeShoes(valor)
    }

    const handleSize = (e) => {
        e.preventDefault();
        setAddSizes([
        ...addSizes,
            [size, Number(quantity)]
        ])
        const filterSize = sizeShoes.filter(e => e != size)
        setSizeShoes(filterSize)
        setDisabled(true)
        setQuantity("")
    }

    const handleSelectSize = (e) => {
        e.preventDefault();
        setSize(e.target.value)
        setDisabled(false)
    }

    const handleSelectQuantity = (e) => {
        e.preventDefault();
        setQuantity(e.target.value)
    }

    return (
        <div className="container-register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <button className="btn-quit-drawer" onClick={()=>activeDrawer()}>X</button>
                <div className="container-index">
                    <div className="form-container">
                        <div className="title">Editar artículo</div>
                        <div className="form-group-one">
                            <div className="labelAndInput">
                                <label className="input-label">*Nombre: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="name"
                                    value={product?.name}
                                    {...register('name')}
                                />
                                {<div className="form-register-errors">{errors.name?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Descripción: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="description"
                                    {...register('description')}
                                />
                                {<div className="form-register-errors">{errors.description?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Categoría: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="category"
                                    {...register('category')}
                                />
                                {<div className="form-register-errors">{errors.category?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Color: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="color"
                                    {...register('color')}
                                />
                                {<div className="form-register-errors">{errors.color?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">URL de imagen: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="image"
                                    {...register('image')}
                                />
                                {<div className="form-register-errors">{errors.image?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Precio: </label>
                                <input
                                    className="input-register"
                                    type="number"
                                    name="price"
                                    {...register('price')}
                                />
                                {<div className="form-register-errors">{errors.price?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Descuento en N%: </label>
                                <input
                                    className="input-register"
                                    type="number"
                                    name="discount"
                                    {...register('discount')}
                                />
                                {<div className="form-register-errors">{errors.discount?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Garantía: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="warranty"
                                    {...register('warranty')} 
                                />
                                {<div className="form-register-errors">{errors.warranty?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Marca: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="brand"
                                    {...register('brand')}
                                />
                                {<div className="form-register-errors">{errors.brand?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Apto para: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="suitable_for"
                                    {...register('suitable_for')}
                                />
                                {<div className="form-register-errors">{errors.suitable_for?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Composición: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="composition"
                                    {...register('composition')}
                                />
                                {<div className="form-register-errors">{errors.composition?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Origen: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="origin"
                                    {...register('origin')}
                                />
                                {<div className="form-register-errors">{errors.origin?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Información importante: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="important_data"
                                    {...register('important_data')}
                                />
                                {<div className="form-register-errors">{errors.important_data?.message}</div>}
                            </div>
                            <div className="labelAndInput">
                                <label className="input-label">Extras: </label>
                                <input
                                    className="input-register"
                                    type="text"
                                    name="extras"
                                    {...register('extras')}
                                />
                                {<div className="form-register-errors">{errors.extras?.message}</div>}
                            </div>
                            <div className="gender-details-create-admin">
                                <input type="radio" name="gender" value="Mujer" id="dot-1" {...register('gender')} />
                                <input type="radio" name="gender" value="Hombre" id="dot-2" {...register('gender')} />
                                <input type="radio" name="gender" value="Niño/a" id="dot-3" {...register('gender')} />
                                <span className="gender-title">Género</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Mujer</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Hombre</span>
                                    </label>
                                    <label htmlFor="dot-3">
                                        <span className="dot three"></span>
                                        <span className="gender">Niño/a</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="container-stock">
                            <button className="button-create-stock" disabled={disabled} onClick={(e)=> handleSize(e)}>Agregar talle</button>
                        
                            <select className="select-create-stock" onChange={(e)=> handleSelectSize(e)}>
                                {
                                    sizeShoes?.map((e, i) => {
                                        return(
                                            <option key={i} value={e}>{e}</option>
                                            )
                                        })
                                    }
                            </select>
                            <div className="labelAndInput-stock">
                                <input
                                    className="input-create-stock"
                                    type="text"
                                    placeholder="Stock"
                                    onChange={(e)=>handleSelectQuantity(e)}
                                    value={quantity}
                                />
                            </div>
                        </div>
                        <div className="labelAndInput-stock-finally">
                            {
                                addSizes?.map((e,i) => {
                                    return(
                                        <button onClick={(e) => handleDeleteSize(e)} name={i} value={e[0]} key={i}>{e[0]} : {e[1]}u</button>
                                        )
                                })
                                }
                        </div>
                        <div className="form-submit">
                            <input
                                type="submit"
                                value="EDITAR PRODUCTO"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export { DrawerEdit }