/* eslint-disable react/prop-types */
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

// eslint-disable-next-line react/prop-types
const Card = ({data}) => {
  // console.log(data)

  return (
    <div className="card bg-base-100 shadow-xl border border-white/10">
      <figure>
        <Swiper
          navigation={true}
          pagination={{clickable: true}}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          className="w-full"
        >
          {data.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${data.title} ${index + 1}`}
                className="h-48 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-white">{data.title}</h2>
          <div
            className={`badge whitespace-nowrap px-3 ${data.status === "Completed" ? "badge-success" : "badge-info"}`}
          >
            {data.status}
          </div>
        </div>
        <p className="text-gray-400 text-sm">{data.desc}</p>
        <div className="card-actions justify-end mt-4">
          {data.tags.map((tag, index) => (
            <div key={index} className="badge badge-outline text-xs">
              {tag}
            </div>
          ))}
        </div>
        <a
          href={data.link}
          target="_blank"
          className={ data.link !== null ? "btn btn-primary btn-sm mt-4" : "btn btn-primary btn-sm mt-4 btn-disabled"}
        >
          {data.link !== null ? "View Project" : "No Link Available"}
        </a>
      </div>
    </div>
  )
}

export default Card
