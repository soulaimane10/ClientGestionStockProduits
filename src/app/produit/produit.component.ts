import { Component, OnInit } from '@angular/core';
import {ProduitMockService} from '../shared/produit.mock.service';
import {Produit} from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];

  constructor(private produitServeice: ProduitMockService) { }

  ngOnInit(): void {
    this.produits = this.produitServeice.getProduits();
  }

}
