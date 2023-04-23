import {LatLngLiteral} from './services/google-maps-types';

// exported map types
export {Circle, CircleOptions, ControlPosition, DataMouseEvent, FullscreenControlOptions, Geocoder, GeocoderAddressComponent, GeocoderComponentRestrictions, GeocoderGeometry, GeocoderLocationType, GeocoderRequest, GeocoderResult, GeocoderStatus, GoogleSymbol, KmlMouseEvent, LatLng, LatLngBounds, LatLngBoundsLiteral, LatLngLiteral, MapTypeControlOptions, MapTypeId, MapTypeStyle, Marker, MarkerIcon, MarkerLabel, MarkerOptions, OverviewMapControlOptions, Padding, PanControlOptions, Polygon, PolygonOptions, Polyline, PolylineOptions, PolyMouseEvent, Rectangle, RectangleOptions, RotateControlOptions, ScaleControlOptions, ScaleControlStyle, StreetViewControlOptions, ZoomControlOptions, ZoomControlStyle,} from './services/google-maps-types';

/**
 * MouseEvent gets emitted when the user triggers mouse events on the map.
 */
export interface MouseEvent {
  coords: LatLngLiteral;
  placeId?: string;
}
