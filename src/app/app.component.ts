import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];
public products: ProductType[] = [
  {
    image: '1.png',
    title: 'Макарун с малиной',
    price: '1,70 руб.'
  },
  {
    image: '2.png',
    title: 'Макарун с манго',
    price: '1,70 руб.'
  },
  {
    image: '3.png',
    title: 'Пирог с ванилью',
    price: '1,70 руб.'
  },
  {
    image: '4.png',
    title: 'Пирог с фисташками',
    price: '1,70 руб.'
  }
];

public formValues = {
  productTitle: '',
  name: '',
  phone: ''
}

public scrollTo(target: HTMLElement): void {
  target.scrollIntoView({behavior: "smooth"})
}

public addToCard(product: ProductType, target: HTMLElement): void {
  this.scrollTo(target);
  this.formValues.productTitle = product.title.toUpperCase();
}

public createOrder()
{
  if (!this.formValues.productTitle) {
    alert('Выберите продукт');
    return;
  }
  if (!this.formValues.name) {
    alert('Введите своё имя');
    return;
  }
  if (!this.formValues.phone) {
    alert('Заполните телефон');
    return;
  }

  //ajax
  alert('Спасибо за заказ');
  this.formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }
}

}
