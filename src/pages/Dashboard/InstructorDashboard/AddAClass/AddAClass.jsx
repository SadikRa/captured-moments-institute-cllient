import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);

  const handlePostClass = async (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const email = form.email.value;
    const instructorName = form.instructorName.value;
    const seats = form.seats.value;
    const price = form.price.value;
    const photo = form.photo.files[0];

    try {
      const formData = new FormData();
      formData.append("image", photo);

      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_KEY
      }`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const imageData = await response.json();
      const imageUrl = imageData.data.display_url;

      const saveClass = {
        imageUrl,
        className,
        email,
        instructorName,
        seats,
        price,
      };

      const saveClassResponse = await fetch(
        `${import.meta.env.VITE_URL}/classes`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveClass),
        }
      );

      if (saveClassResponse.ok) {
        // Class successfully saved
        console.log("Class saved successfully");
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class added successfully',
            showConfirmButton: false,
            timer: 1500
          })
      } else {
        // Handle error response
        console.log("Error saving class");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="my-8">
        <form onSubmit={handlePostClass}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <p className="my-3">Class Name</p>
              <input
                type="text"
                name="className"
                placeholder="class Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <p className="my-3">Class Image</p>
              <input
                type="file"
                name="photo"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <p className="my-3">Instructor Email</p>
              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <p className="my-3">Instructor Name</p>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="instructorName"
                placeholder="Instructor Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <p className="my-3">Available seats</p>
              <input
                type="text"
                name="seats"
                placeholder="Available seats"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <p className="my-3">Price</p>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
