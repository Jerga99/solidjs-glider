import { ParentComponent } from "solid-js";




const MainLayout: ParentComponent = (props) => {


  return (
    <div>
      <div class="p-4 bg-green-800">
        <div>Something reusable</div>
        <div>Hello I am MainLayout Component</div>
        {props.children}
        </div>
    </div>
  )
}

export default MainLayout;
