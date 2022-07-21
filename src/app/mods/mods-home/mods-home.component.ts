import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mods-home',
    templateUrl: './mods-home.component.html',
    styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
    showModal = false
    modalConfig = {
        title: 'REUSABLE MODAL TITLE',
        content: 'Some reusable contents for the modal window should go here...',
        closeButton: true,
        buttonCaption: 'Reusable Close'
    }
    items = [
        {
            title: 'What is a dog?',
            content: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
        },
        {
            title: 'What kinds of dogs are there?',
            content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'
        },
        {
            title: 'How do you acquire a dog?',
            content: `
Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.
                    `
        },
    ]

    toggleModal () {
        this.showModal = !this.showModal
    }

}
