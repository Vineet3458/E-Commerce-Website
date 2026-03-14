import { Fragment, useState } from "react";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/Components/ui/sheet";
import CommonForm from "@/Components/common/form";
import { addProductFormElements } from "@/config";

const initialFormData = {
    image : null,
    title : "",
    description : "",
    price : 0,
    category : "",
    brand : "",
    salePrice : "",
    totalStock : "",
}

function AdminProducts() {

  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

    function onSubmit(){ 
    }

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProductDialog}
        onOpenChange={() => {
          setOpenCreateProductDialog(false);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
                <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <div className="py-6">
                <CommonForm 
                onSubmit = { onSubmit } 
                formData={formData} 
                setFormData={setFormData} 
                buttonText={"Add"}
                formControls={addProductFormElements}
                />
            </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
