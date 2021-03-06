import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partsdescription',
  templateUrl: './partsdescription.component.html',
  styleUrls: ['./partsdescription.component.css']
})
export class PartsdescriptionComponent implements OnInit {

  descriptionArray = [
    {
      partTitle: "Processor",
      descTitle: "Processor",
      description:"A central processing unit (CPU), also called a central processor, main processor or just processor, is the brain of the computer. It carries out all of the tasks and does the heavy lifting. It's probably the most important part of the computer and can also be expensive. We recommend AMD or Intel, AMD has the Ryzen and Threadripper series. Intel has a lot of choices but we recommend anything over a 7th Gen i5 or i7.",
      selected: true,
      imgPath: "assets/images/Processor.png"
    },
    {
      partTitle: "MotherBoard",
      descTitle: "MotherBoard",
      description:"The Motherboard is a circuit board that allows all of the pieces inside your computer case to connect with each other. There are a lot of options for motherboards, some can be extremely cheap and do the bare minimum. Others are very expensive and can have RGB lights and extra options. What you choose depends on the CPU you're planning on buying. Not all CPU's and motherboards are compatible, if you have trouble finding the right ones that work together you can always use our computer builder.",
      selected: false,
      imgPath: "assets/images/MotherBoard.png"
    },
    {
      partTitle: "Memory",
      descTitle: "Memory",
      description:"Computer memory, also known as Random Access Memory (RAM) is the \"working memory\" of the computer. When ever your computer needs to hold information for a short time and then pull it out to use it, that information is stored in the Memory Stick. They are mostly measured in the amount of data they store(measured in Gigabytes) and the speed at which they transfer it(measured in Megahertz).",
      selected: false,
      imgPath: "assets/images/Memory.png"
    },
    {
      partTitle: "Graphics Card",
      descTitle: "Graphics Card",
      description:"The Graphics card handles all the image rendering on your monitor, the better your card is the smoother images can be displayed. There are two types of graphics cards, Integrated and Discrete. Discrete is going to be your best bet as it can be upgraded pretty easily as it???s an extra component to the motherboard, where the Integrated one, while possible to upgrade it, is tougher to do since it???s built into the motherboard.",
      selected: false,
      imgPath: "assets/images/GraphicsCard.png"
    },
    {
      partTitle: "Case",
      descTitle: "Case",
      description:"The computer case is what you'll be putting all your computer parts into. There are a few important things to know about when it comes to building computer parts. First thing is the size. There is only so much space in a computer case and bigger ones can fit more, or bigger components. Always check the size of your case and components before finalizing a computer build. Secondly Is the fans and ports that come with the case. Most computer cases will come with fans on the front and back of the computer to promote healthy airflow. They also can come with extra ports, such as USB 3.0 ports. These are all important to choosing and understanding a computer case.",
      selected: false,
      imgPath: "assets/images/Case.png"
    },
    {
      partTitle: "Storage Device",
      descTitle: "Storage Device",
      description:"The storage is were the bulk of your data is stored. Data such as photos, videos, music, programs, and other files are stored here. Storage devices vary on the amount of data they store, and their read and write speed. Read and write speeds are the speed at which the device can store and pull data. Storage devices are also often split between two different types, Hard Disk Drive and Solid State Drive.\n Hard Disk Drives use a compact disk to store data on. They tend to be cheaper and store more data than SSDs, but lack in read and write speed.\n Solid State Drives use semiconductor chips to store data. These tend to be more expensive than the HHD but make up for it in much faster Read and Write Times.",
      selected: false,
      imgPath: "assets/images/Storage.png"
    },
    {
      partTitle: "Power Supply",
      descTitle: "Power Supply",
      description: "Power supplies transfer power from the wall power and deliver it to all the components of your computer. They come in different max wattages and cable metals. They also can be modular; meaning that the user can choose how many plugs to have coming out of the power supply. This can help greatly with clutter. Always double check max wattage on your power supply is above the total wattage of all the components in your computer.",
      selected: false,
      imgPath: "assets/images/PowerSupply.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
