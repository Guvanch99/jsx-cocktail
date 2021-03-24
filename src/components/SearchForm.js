import React from 'react'

 const SearchForm = ({setsearchTerm}) => {
     const handleSubmit=(e)=>{
e.preventDefault();
     }
     const search=()=>{
    setsearchTerm(searchValue.current.value)
     }
     const searchValue=React.useRef('')
    return (
        <section className='section'>
            <h2 className='section-title'>search cocktails</h2>
            <form className='form search-form' onSubmit={handleSubmit}>
             <div className='form-control'>
                 <label htmlFor='name'>
                     search your favorite
                 </label>
                 <input type='text' name='name' id='name' ref={searchValue} onChange={search}/>
             </div>
            </form>
        </section>
    )
}
export default SearchForm
