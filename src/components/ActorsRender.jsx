import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActors } from "../features/actors";
import ActorList from "./ActorList";

const ActorsRender = () => {
  const detailActors = useSelector((state) => state.actors.value.detailActors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActors());
  }, [dispatch]);

  return <ActorList listData={detailActors} listTitle={"Popular Actors"} />;
};

export default ActorsRender;
