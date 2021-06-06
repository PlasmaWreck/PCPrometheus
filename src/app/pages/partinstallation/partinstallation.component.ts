import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partinstallation',
  templateUrl: './partinstallation.component.html',
  styleUrls: ['./partinstallation.component.css']
})
export class PartinstallationComponent implements OnInit {

  constructor() { }

  descriptionArray = [
    {
      partTitle: "Case",
      descTitle: "Opening the Computer Case:",
      description: "  Most brands make it very easy to access your computer case now. Often you can take of all sides of a computer for ease of access to the inner components. However, here we will just be focusing on the side panels. Most computer cases follow one of two ways of securing the side panels to the case. The first, most common with metal and plastic sides of a case, the panel is slide on from the back of the computer and then secured with screws so it wont pop off the case. The other, more common on glass panels in cases, has the panel lined up with four holes in the corners of the case. These are simply placed in the designated slot and secured with screws in said four corners. To open up the first type of panel, simply locate the rear screws and unscrew them to allow you to slide off the side panel. To remove the second type of panel locate to locations of the screws on the panels, unscrew them, and carefully remove the panel from the case.",
      selected: true,
      imgPath: "assets/images/Case.png"
    },
    {
      partTitle: "MotherBoard",
      descTitle: "Mounting the MotherBoard in the Case:",
      description: "  Mounting the case is a relatively easy process and mostly consists of lining up the motherboard to the case so you can secure it with screws. Inspect the inside of your case carefully for the small protruding stilts for you to screw the motherboard into. They should line up with the some small holes in your motherboard. Once you've located where the case and motherboard line up, check within the materials given to you with your motherboard and see if there is a small sheet that shows where the motherboard CAN NOT be touching the case. Make a quick comparison and everything looks good you can move on to the process of securing the motherboard. To secure your motherboard you must first find the spall screws that came with your computer case for mounting the motherboard. Your cases manual will display the screws you need if you can not find them at first glance. Once those are found, you can begin by grounding yourself to a nearby metal object and gently aligning the motherboard with the case and placing it in. There should be a small anchor point in the case that lets the motherboard slip into the right spot. Once the motherboard is resting in the case, use the screws found earlier to secure the motherboard to the case! Congrats! You just mounted your motherboard.",
      selected: false,
      imgPath: "assets/images/MotherBoard.png"
    },
    {
      partTitle: "Processor",
      descTitle: "Installing the Processor:",
      description: "  Installing the processor is a pretty simple task once you get a take a good look at its spot on the motherboard. You should be able to see that it is a type of clamp that will hold your processor in place. It may also have a plastic top attached to the clamp that says something along the lines of \"Do not remove until after processor installation.\" We are going to follow those instructions and leave it attached to the clamp. To open the clamp you must find a small bent bar on the right side of the clamp and remove it from under the clamp. The clamp should spring open and you will see where your processor will be housed. Next, get your processor and locate the very small triangle on one of the corners of your processor. This will be the bottom left corner of the front of the processor. Simply place the processor within the space provided underneath the clamp, with the front facing you and the small arrow in the lower left corner. Once the processor is in place, you must now secure it with the clamp. Use the bar that you used to release the clamp earlier and press down so the clamp closes and returns to its original position. This may take more strength than seems necessary. The plastic cover on the clamp may also pop off, this is good and means you are getting close to securing the processor. If it doesn't, to not worry just remove the cover after securing the processor. After that the processor is ready to go!",
      selected: false,
      imgPath: "assets/images/Processor.png"
    },
    {
      partTitle: "Memory Sticks",
      descTitle: "Installing The Memory Sticks:",
      description: "To install memory sticks it is very important to first read the manuel included with your motherboard. The manuel will tell you what pattern to install your memory depending on the amount of cards you have. Once you know what slots to install the cards into, find the slots and release the clamps around them. Once that is done you should line up one of the cards with the small indent on the motherboard slot. From there insert the card and make sure it is firmly in the slot. Close the clamps around the memory stick and repeat for each of your cards.",
      selected: false,
      imgPath: "assets/images/Memory.png"
    },
    {
      partTitle: "CPU Cooler",
      descTitle: "Installing the CPU Cooler:",
      description: "  The CPU cooler can be one of the trickier components to install, but here we will make it easy. First find the four holes around your processor in a square shape. Once you have found those you will need to gain access to the backside of the motherboard. Most coolers will have a rear mount so that the cooler is very secure. Check you cooler to see if there is a rear mount included. If there is a rear mount for the cooler, simply align the four corners of it to the four on the back of the motherboard and slot them in. Next return to the processor side of the motherboard be ready to install the main cooler. Be sure to place a small dot of thermal paste on the conductive plate of the CPU cooler. Then, line up cooler with the rear mount and be use the provided screws to secure it.",
      selected: false,
      imgPath: "assets/images/CpuCooler.png"
    },
    {
      partTitle: "Graphics Card",
      descTitle: "Mounting the Graphics Card:",
      description: "  The Graphics card is a simple installation that only involves a few screws and a clamp. On your motherboard there should be a horizontal slot that has a small protrusion within the slot. This will be were your graphics card will be installed. Once located you will release a small clamp on one side of the slot. Next remove the dust cover on the rear of the case so that the graphics card fits and its ports are accessible. Most cases have multiple of these dust covers so make sure the one your remove is on the same level as the location you want to install your graphics card. Now that you have the spot for your graphics card located and cleared out we can install the card. Find the thin protruding section of your graphics card that looks like it would fit into the slot you found earlier. Simply line up the graphics card with the slot and insert it. You may notice that it requires more force than you think. Once the graphics card is mounted the small clamp from before may have clamped down automatically. If it hasn't simply secure the clamp yourself. The card isn't quite ready to work just yet because it needs extra power to be pumped into it as described in our power supply section of this page.",
      selected: false,
      imgPath: "assets/images/GraphicsCard.png"
    },
    {
      partTitle: "Storage Devices",
      descTitle: "Installing a Storage Unit:",
      description: "  Installing storage units is easy. First you must locate where you should place your storage unit in your case. Often times it will be in a container with trays that you can easily remove. Find that and take out one of the trays. Compare the holes in the tray to the holes on the bottoms of your storage unit. Place those on tome of each other and then secure them with the provided screws. Slide the tray back in with the two L shaped plugs facing toward the shallow side of the case. Both of these plugs are SATA cables, the small one for data connection, and the large one for power. We will attach the power one later. For now find the smaller SATA cables that came with your CPU or storage device. Take that and plug the bent end(if there is one) into the storage device. Then route that cable into one of the smaller SATA ports around the motherboard. Now your storage unit is installed!",
      selected: false,
      imgPath: "assets/images/Storage.png"
    },
    {
      partTitle: "Power Supply",
      descTitle: "Bringing Power to The Computer:",
      description: "  Now we have the power house of the computer and all the wire that go with it. This is considered one of the trickier parts of making a computer. The power supply often sits at the rear floor of the computer case and has its own section to secure it to the rear of the computer. Before you put in the power supply it should be a rather large hole and easy to spot. Some computer cases have shell that goes around the power supply and its protruding wires. Take a look at your case manual to see if you have one of these shells and, if you do, remove it. Once you've removed any shells and found where the power supply should be placed, simply slot the power supply into the spot, with any protruding wires facing into the case, and so the power switch ends up on the outside of the case. Screw in the power supply with the provided screws and bam! You installed a power supply! The hard part is getting that power to the rest of the computer. There should be at least two large wires coming out of your power supply. One with 8 large prongs and another larger one with 12 prongs. The 8 prong onw will be powering your processor, so route it through the shallow section of the computer case and have it end up near its matching plug on the motherboard.(Often in the top left.) The larger cord is the general power to the rest of the motherboard. Route this one the same way as the CPU power but this time have it end up by the larger matching plug.(Often on the right side near the center.) If your power supply is modular, meaning it has plugs that you can plug new wires into the PSU and have those route power, spots in the computer that need power and find their matching cords to use with the PSU. Good places to look are on your graphics card, storage units, and extra peripherals. You will find there are mostly two types of cords. Those with large prongs labeled PCIe's hand L shaped ones labeled SATA cables. The SATA cables will be powering your smaller components like storage units, and your PCIe's will be powering the bigger ones like graphics cards. Route these cords to their appropriate places and plug them in. Now you have a powered computer!",
      selected: false,
      imgPath: "assets/images/PowerSupply.png"
    }
  ]

  ngOnInit(): void {
  }

}
