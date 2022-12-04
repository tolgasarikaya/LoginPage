import { HiOutlineUserCircle } from "react-icons/hi";

function App() {
  return (
    <div class="bg-gradient-to-r from-cyan-200 to-orange-300 h-screen flex ">
      <form class="w-1/3 bg-gradient-to-r from-cyan-100 to-orange-100 m-auto shadow-xl">
        <HiOutlineUserCircle size={210} class="m-auto text-orange-400" />
        <div class="grid gap-y-4 grid-cols-1 justify-items-center py-16">
          <input
            type="text"
            name="user"
            placeholder="Username"
            class="rounded-xl py-1 px-1 border-2 border-gray-300 w-2/3 shadow-md focus:shadow-xl focus:outline-none focus:border-orange-200 focus:ring-orange-200"
          />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
            class="rounded-xl py-1 px-1 border-2 border-gray-300 w-2/3 shadow-md focus:shadow-xl focus:outline-none focus:border-orange-200 focus:ring-orange-200"
          />

          <button
            type="submit"
            class="bg-orange-400 shadow-xl hover:bg-orange-500 rounded-xl py-2 px-1 border-2 border-gray-300 w-2/3 font-semibold text-white "
          >
            Sign In
          </button>
          <div class="flex items-center justify-center w-full gap-2">
            <input
              type="checkbox"
              class="accent-orange-400 w-5 h-5 rounded block"
            />
            <div>Keep me logged in</div>
          </div>
          <div>
            Do not have an account?{" "}
            <a href="#" class="text-orange-400 hover:font-semibold">
              Sign up &rarr;{" "}
            </a>
          </div>
          <div>
            Forgot your password?{" "}
            <a href="#" class="text-orange-400 hover:font-semibold">
              Retrieve it &rarr;{" "}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
