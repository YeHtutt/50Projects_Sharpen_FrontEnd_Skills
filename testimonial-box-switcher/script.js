const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const userRole = document.querySelector(".role");

const testimonials = [
  {
    name: "Sonia Smith",
    position: "Marketing",
    photo:
      "https://randomuser.me/api/portraits/women/40.jpg",
    text: "She is an exceptional marketing professional who executed the campaign exactly as we envisioned. Do yourself a favor and hire her; you won't be disappointed by her results. She goes above and beyond to ensure your satisfaction with the project. I will definitely work with her again!",
  },
  {
    name: "Lin Cheng",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "She is an outstanding software engineer who delivered the project exactly as we needed. Do yourself a favor and hire her; you won't be disappointed by the quality of her work. She goes above and beyond to ensure your satisfaction with the project. I will definitely work with her again!",
  },
  {
    name: "Nataly Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "She is an outstanding data entry professional who completed the tasks with precision and efficiency. Do yourself a favor and hire her; you won't be disappointed by her attention to detail and accuracy. She goes the extra mile to ensure everything is perfect. I will definitely work with her again!",
  },
  {
    name: "Kathia Robinson",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "She is an exceptional receptionist who consistently provided outstanding support and service. Do yourself a favor and hire her; you won't be disappointed by her professionalism and friendliness. She goes above and beyond to ensure every guest feels welcomed and taken care of. I will definitely work with her again!",
  },
  {
    name: "Jonnathan Nilson",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "He is an amazing graphic designer who delivered exceptional designs that perfectly met our needs. Do yourself a favor and hire him; you won't be disappointed by his creativity and attention to detail. He goes above and beyond to ensure you are thrilled with the final product. I will definitely work with him again!",
  },
  {
    name: "Miyah Myles",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "She is an exceptional accountant who managed our finances with precision and expertise. Do yourself a favor and hire her; you won't be disappointed by her meticulous attention to detail and professionalism. She goes above and beyond to ensure everything is accurate and up to date. I will definitely work with her again!",
  },
  {
    name: "Benny Saphire",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "He is an outstanding director who leads with vision and expertise, consistently delivering exceptional results. Do yourself a favor and hire him; you won't be disappointed by his strategic thinking and leadership skills. He goes above and beyond to ensure the success of every project. I will definitely work with him again!",
  },
];

let idx = 1;

function updateTestimonial() {
    const {name, position, photo, text} =   testimonials[idx];

    testimonial.innerText = text;
    userImage.src = photo;
    userName.innerText = name;
    userRole.innerText = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}

/**setInterval time (10s) adapted to the progressbar grow animation */
setInterval(updateTestimonial, 10000);
