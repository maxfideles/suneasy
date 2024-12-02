import { Component } from '@angular/core';
import { StripeService } from 'src/app/services/stripe.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

  stripeResponse:any = 'asd'

  constructor(private service:StripeService){}

  sessionStripe(plan:string){

    var payload = {userId: 123, data:{PACKAGE: plan}}

    console.log(payload);
    

    this.service.createSubscriptionSession(payload).subscribe((res)=> {

      console.log(res);

      this.stripeResponse = res;



      window.open(this.stripeResponse.sessionUrl, '_blank');
      

    })

  }

}
