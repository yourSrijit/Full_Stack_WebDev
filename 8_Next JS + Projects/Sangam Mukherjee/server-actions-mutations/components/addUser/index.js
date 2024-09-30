"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormControl, FormInitialState } from "@/utils"
import { useState } from "react"


function AddNewUser() {
  const [openPopUp,setOpenPopUp]=useState(false);
  const [newUser,setNewUser]=useState(FormInitialState);
  console.log(newUser);
 
  
  return (
    <div>
        <Button onClick={()=>setOpenPopUp(true) }>Add User</Button>
        <Dialog open={openPopUp} onOpenChange={()=> {
          setOpenPopUp(false)
          setNewUser(newUser);
          }}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new Usere</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            {FormControl.map( item=>
              <div className="grid grid-cols-4 items-center gap-4" key={item.name}>
                <Label htmlFor="name" className="text-right">
                  {item.label}
                </Label>
                <Input id={item.name} placeholder={item.placeholder} className="col-span-3" 
                type={item.type}
                value={newUser[item.name]}
                onChange={(e)=> 
                  setNewUser({...newUser,[item.name]: e.target.value})
                }
                />
              </div>

              )}
            </div>

            <DialogFooter>
              <Button type="submit" onSub>Save</Button>
            </DialogFooter>
          </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddNewUser