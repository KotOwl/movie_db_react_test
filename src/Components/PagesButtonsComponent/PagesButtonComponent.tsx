import {pageActions} from "../../redux/slices/pageStoreSlice.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/helpers.tsx";

export const PagesButtonComponent = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.pageSlice.page)
    return (
        <>
            <div className={"pagesButtonsWrapper"}>
                <button className={"pagesButtons"} onClick={() => {
                    if (page > 1)
                        dispatch(pageActions.changePage(page - 1))
                }}>Previous page
                </button>
                <button className={"pagesButtons"} onClick={() => {
                    dispatch(pageActions.changePage(page + 1))
                }}>Next page
                </button>
            </div>
        </>
    );
};