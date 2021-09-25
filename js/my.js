$(document).ready(() => {
  const productsList = [
    {
      name: "item 1",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t45.5328-4/238615410_5994692343935732_8994169358244585364_n.png?_nc_cat=102&ccb=1-5&_nc_sid=c48759&_nc_eui2=AeG6eJYWhIWH2JN9jdbpRAenGRwPVrNyyWIZHA9Ws3LJYrVAG1LuNsXbK5XNi7XjUGRyPAb8pmKe7B3HNDo4ye45&_nc_ohc=by183Z2WLPsAX9eQ98q&_nc_ht=scontent.fmnl17-2.fna&oh=45669a0c6259eec657755394935c67b4&oe=6153245E",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.0",
    },
    {
      name: "item 2",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741376",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.1",
    },
    {
      name: "item 3",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741377",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.2",
    },
    {
      name: "item 4",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741378",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.3",
    },
    {
      name: "item 5",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741379",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.4",
    },
    {
      name: "item 6",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741380",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.5",
    },
    {
      name: "item 7",
      pic:
        "https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.6435-9/240960085_123736269998740_8041177692968533592_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGDGmF2Yw7wdmqXH9updIMcO-nvY3wI6pY76e9jfAjqlh6oHwfWYH1i66i_dB1Cl9pTXz3XS9_WyK8wwtsWaawO&_nc_ohc=nMLg6wkrPvQAX9nRq0w&_nc_ht=scontent.fmnl17-4.fna&oh=87408acb9cbc1bf8727fdcb20fdb17f7&oe=61728FAA",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.6",
    },
    {
      name: "item 8",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741382",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.7",
    },
    {
      name: "item 9",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741383",
      price: "250.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.8",
    },
    {
      name: "item 10",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741384",
      price: "268.00",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.9",
    },
    {
      name: "item 11",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741385",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.10",
    },
    {
      name: "item 12",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741386",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.11",
    },
    {
      name: "item 13",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741387",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.12",
    },
    {
      name: "item 14",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741388",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.13",
    },
    {
      name: "item 15",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741389",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.14",
    },
    {
      name: "item 16",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741390",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.15",
    },
    {
      name: "item 17",
      pic:
        "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/241077877_123736356665398_8806617074069959771_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF5tkqFJAqVGIn07Wxc-U7IKafg4LyVxqspp-DgvJXGq89Crz8CFz6wxXP6V66KJ51ziIqgaBw9ykIgob5kgHcl&_nc_ohc=bA6_5YUOrm8AX-gQqND&_nc_ht=scontent.fmnl17-2.fna&oh=80f2f39b3613002f0e71bc987b9444aa&oe=61741391",
      link:
        "https://www.lazada.com.ph/products/local-warranty-dere-official-r9-pro-laptop-for-sale-brand-new-156-inch-hd-screen-intel-celeron-n5100-n5095-cpu-hd-graphics-600-windows-10-pro-24g-wifi-online-learning-computer-pc-61281225612512-redsilverblackwhite-i981638596-s7634776977.html?spm=a2o4l.home.flashSale.3.239e359dbx2p6k&search=1&mp=1&c=fs&clickTrackInfo=rs%3A0.0%3Babid%3A238030%3Bitem_id%3A981638596%3Bpvid%3A91393ec5-0276-4d18-85d8-b062c4cc5270%3Bmt%3Ai2i%3Bdata_type%3Aflashsale%3Bscm%3A1007.17760.238030.%3Bchannel_id%3A0000%3Bcampaign_id%3A141569&scm=1007.17760.238030.16",
    },
  ];

  $.getJSON("https://bioinfobot.github.io/data/2017-05.json")
  .done(function( data ) {
     console.log(data)
  });

  $.each(productsList, (key, value)=>{
      //console.debug(key, value);
      $("#products .encl").append(`
      <div class="col mb-5">
      <div class="card h-100">
      <img
          class="card-img-top"
          src="${value.pic}"
          alt="..."
      />
      <div class="card-body p-4">
          <div class="text-center">
          <h5 class="fw-bolder">${value.name.toUpperCase()}</h5>
          <!-- Product reviews-->
          <div class="d-flex justify-content-center small text-warning mb-2">
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
          </div>
          ₱${Number(value.price).toFixed(2)}
          </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
          <a class="btn btn-outline-dark mt-auto" target="_blank" href="${value.link}"
              >View options</a
          >
          </div>
      </div>
      </div>
  </div>
      `);
  });// each
});
