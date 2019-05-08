import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../shared/category';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CategorydetailComponent } from '../categorydetail/categorydetail.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  errorMsg: string;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {
    dialog.afterAllClosed.subscribe( () => {
      this.getAllCategories();
    })
   }

  ngOnInit() {
    //this.categoryService.getCategories().subscribe(data => this.categories = data);
    this.getAllCategories();
  
  }

  openCategoryDetailForm(category?: Category) {
    if(!category) {
      category = new Category();
    }
    let dialogRef = this.dialog.open(CategorydetailComponent, {
     data: category
    });

  }

  getAllCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data,
      errmess => this.errorMsg = errmess);
  }

  deleteCategory(category: Category) {
    if(confirm('Are you sure you want to delete this item')){
      this.categoryService.deleteCategory(category).subscribe(() => this.getAllCategories(),
      errmess => this.errorMsg = errmess);
    }
  }

}
