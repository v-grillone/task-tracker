import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReiminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Empty field.');
        }
        onAdd({text, day, reminder})
        setText('');
        setDay('');
        setReiminder(false);
    }



  return (
    <form className='form-contaienr m-10 p-4 space-y-4 flex flex-col justify-center border border-blue-200 rounded' onSubmit={onSubmit} >
        <div className='p-2 border border-gray-200 space-x-4 flex flex-row justify-start'>
            <label >Task</label>
            <input type="text" placeholder='Add task...' className='border px-2 text-sm' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='p-2 border border-gray-200 space-x-4 flex flex-row justify-start'>
            <label >Day</label>
            <input type="text" placeholder='Add day...' className='border px-2 text-sm' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='p-2 border border-gray-200 space-x-4 flex flex-row justify-start'>
            <label >Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReiminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value='Save Task' className='border border-blue-200 bg-blue-400 text-white p-2 rounded'/>
    </form>
  )
}

export default AddTask