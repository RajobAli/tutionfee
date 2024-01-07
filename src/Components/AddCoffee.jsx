
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const classname = form.classname.value;
        const section = form.section.value;
        const classroll = form.classroll.value;
        const month = form.month.value;
        const amount = form.amount.value;
        const newCoffee = { name, classname, section, classroll, month, amount };
        console.log(newCoffee);

        fetch('https://tution-server-9df4zst31-arajob039-gmailcom.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })

    }



    return (
        <div>
            <div className="ml-4">
                <Link className="ml-4" to='/'>Home</Link>
                <Link className="ml-4" to='/class'>Class</Link>
                <Link className="ml-4" to='/addCoffee'>Add Student</Link>
                <Link className="ml-4" to='/fee'>Fee</Link>
                <Link className="ml-4" to='/different'>Different</Link>
            </div>
            <div className="bg-[#F4F3F0] p-24">
                <h1 className="text-3xl font-extrabold">AddCoffee</h1>
                <form onSubmit={handleSubmit}>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Students Name</span>

                            </label>
                            <label className="input-group">

                                <input type="text" name="name" placeholder="Students Name" className="input input-bordered w-full"></input>

                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Class</span>

                            </label>
                            <label className="input-group">

                                <input type="text" name="classname" placeholder="Class name" className="input input-bordered w-full"></input>

                            </label>

                        </div>

                    </div>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Students Section</span>

                            </label>
                            <label className="input-group">

                                <input type="text" name="section" placeholder="Students Name" className="input input-bordered w-full"></input>

                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4 mb-4">
                            <label className="label">
                                <span className="label-text">Class Roll</span>

                            </label>
                            <label className="input-group">

                                <input type="text" name="classroll" placeholder="classroll" className="input input-bordered w-full"></input>

                            </label>

                        </div>

                    </div>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name of Month</span>

                            </label>
                            <label className="input-group">

                                <input type="text" name="month" placeholder="Month" className="input input-bordered w-full"></input>

                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ml-4 mb-4">
                            <label className="label">
                                <span className="label-text">Amount</span>

                            </label>
                            <label className="input-group">

                                <input type="text" name="amount" placeholder="amount" className="input input-bordered w-full"></input>

                            </label>

                        </div>

                    </div>
                    <input className="btn btn-block bg-green-700" type="submit" value="Add Student" />

                </form>
            </div>
        </div>
    );
};

export default AddCoffee;