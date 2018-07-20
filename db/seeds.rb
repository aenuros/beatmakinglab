# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

t2 = Tutorial.find_or_create_by([
{name: 'Ableton', description: 'software', link: 'https://www.youtube.com/watch?v=D9tjzSctp_Q&list=PLoh4MB-kbBmJGLjNwRNr5qAtDr1V3zcNr'},

{name: 'Reason', description: 'software', link: 'https://www.youtube.com/watch?v=ftI-MHBhDV8&list=PL29263D87CD4601CD'},

{name: 'FLstudio', description: 'software', link: 'https://www.youtube.com/watch?v=zgyDMLF_MXk&list=PLA988BD357AA510D1'},

{name: 'GarageBand', description: 'software', link:'https://www.youtube.com/watch?v=CT5RNHEX43M&list=PLa_TA4RKaD9O2dxT4Ejz6hOpMebrAZGB8'},

{name: 'Reaper', description: 'software', link:'https://www.youtube.com/watch?v=y9i0HfMreF0&list=PL8hp7Ohapfw130B9JfVTI_aj35OjMcd4i'},

{name: 'Audacity', description: 'yo', link:'https://www.youtube.com/watch?v=eT88PreScG8&list=PL8765IzZomZ6NguIrpor-6l_lLTirrny_'},

{name: 'Openlabs', description: 'j', link:'https://www.youtube.com/watch?v=l6Xv3ALGw24&list=PLXCfp4cDaWxWATP88fqRbg9El2Zk1h3wt'},

{name: 'iMaschine', description: 'j', link:'https://www.youtube.com/watch?v=0LXVptAtBm8&list=PLKgBk2ChdEqyEeteDuK2p28OLr46KnWCr'},

{name: 'MPC', description: 'ffr', link:'https://www.youtube.com/watch?v=QVDYHrf4XaU&list=PLyawkFIWnO1MKzz7x_SO2FagrMiyza4Pc'},

{name:'Logic', description: 'll', link:'https://www.youtube.com/watch?v=hU5XhG5Ywbk&list=PLXmi76euGSyzX8KMPAHJPyOSZy5w4CsV9'},

{name:'Studio One', description: 'll', link:'https://www.youtube.com/watch?v=7nWp4DvWn_c&list=PLvw8caaTyXjN8WWBKxU-fv90OilpezxDv'},

{name:'Bitwig', description: 'll', link:'https://www.youtube.com/watch?list=PLfXKHnSL0KtQuiYHRr05qsaf31IZ2O6NE&v=3tvDJTUoHkc'},

{name:'Cubase', description: 'll', link:'https://www.youtube.com/watch?v=8nnJ9xwdcYA&list=PLeAGmrQnjblb3AOICgXbbwr3b0x2J32FG'},

{name:'Ardour', description: 'll', link:'https://www.youtube.com/watch?v=43ES7p4ejX0&list=PLA1275563EB9775E1'}

  ])
