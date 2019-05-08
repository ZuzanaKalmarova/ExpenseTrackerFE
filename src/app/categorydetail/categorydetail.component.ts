import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../shared/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.scss']
})
export class CategorydetailComponent implements OnInit {

  categoryForm: FormGroup;
  category: Category;
  errorMsg: string;
  
  constructor(private fb: FormBuilder,
    private categoryService: CategoryService, 
    public dialogRef: MatDialogRef<CategorydetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      this.category = data;
      this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.categoryForm = this.fb.group({
      // id: this.category.id,
      name: [this.category.name, Validators.required],
      description: [this.category.description, Validators.required],
      budget: [this.category.budget, Validators.required]
    });
  }

  onSubmit() {
    let categoryId = this.category.id;
    this.category = this.categoryForm.value;
    this.category.id = categoryId;
    if (this.category.id == null) {
      //call add category
      /* this.categoryService.addCategory(this.category)
        .then(); */
      this.categoryService.addCategory(this.category).subscribe(() => this.dialogRef.close(),
                                                                errmes => this.errorMsg = errmes);
    } else {
      //call update category
      /* this.categoryService.updateCategory(this.category)
        .then(); */
      this.categoryService.updateCategory(this.category).subscribe( () => this.dialogRef.close(),
                                                                    errmes => this.errorMsg = errmes);
    }
    //console.log(this.category);
    //window.top.location.reload();
    //this.dialogRef.close();
  }

}
